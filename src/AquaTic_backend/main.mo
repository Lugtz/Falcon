//main.mo
import Types "Types";
import Cycles "mo:base/ExperimentalCycles";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import Float "mo:base/Float";
import Debug "mo:base/Debug";

actor {
  let ic : Types.IC = actor "aaaaa-aa"; // Management Canister ID

  public func fetchSensorData() : async Text {
    // Definir URL
    let url: Text = "https://aquatic-backend.onrender.com/api/sensores";

    // Definir encabezados HTTP
    let request_headers = [
      { name = "Host"; value = "aquatic-backend.onrender.com" },
      { name = "User-Agent"; value = "Motoko HTTP Agent" },
    ];

    // Preparar la solicitud HTTP
    let http_request : Types.HttpRequestArgs = {
        url = url;
        max_response_bytes = null;
        headers = request_headers;
        body = null;
        method = #get;
        transform = null;
    };

    // Añadir ciclos para pagar la solicitud HTTP
    Cycles.add(20_949_972_000);

    // Realizar la solicitud HTTP y esperar la respuesta
    let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);

    // Decodificar el cuerpo de la respuesta
    let response_body: Blob = Blob.fromArray(http_response.body);
    let decoded_text: Text = switch (Text.decodeUtf8(response_body)) {
      case (null) { "No value returned" };
      case (?text) { text };
    };

    // Retornar el texto decodificado
    return decoded_text;
  };

  public func sendSensorData(sensorData: Types.SensorData) : async Text {
    // Codificar los datos del sensor en formato JSON
    let sensorJson: Text = encodeSensorJson(sensorData);
    Debug.print("Sending JSON: " # sensorJson);

    // URL a la que se enviarán los datos
    let url: Text = "https://aquatic-backend.onrender.com/api/sensores";

    // Codificar el cuerpo de la solicitud en bytes
    let bodyBytesBlob = Text.encodeUtf8(sensorJson);
    let bodyBytes = Blob.toArray(bodyBytesBlob); // Convertir Blob a [Nat8]

    // Preparar los encabezados y el cuerpo de la solicitud HTTP
    let request_headers = [
      { name = "Host"; value = "aquatic-backend.onrender.com" },
      { name = "Content-Type"; value = "application/json" }
    ];
    let http_request : Types.HttpRequestArgs = {
        url = url;
        max_response_bytes = null;
        headers = request_headers;
        body = ?bodyBytes;
        method = #post;
        transform = null;
    };

    // Añadir ciclos para pagar la solicitud HTTP
    Cycles.add(1_000_000_000_000); // La cantidad específica necesitará ser ajustada según la documentación

    // Realizar la solicitud HTTP POST y esperar la respuesta
    let http_response : Types.HttpResponsePayload = await ic.http_request(http_request);

    // Decodificar y retornar la respuesta
    let response_body: Blob = Blob.fromArray(http_response.body);
    let decoded_text: Text = switch (Text.decodeUtf8(response_body)) {
      case (null) { "No value returned" };
      case (?text) { text };
    };

    return decoded_text;
  };

  private func encodeSensorJson(sensorData: Types.SensorData) : Text {
    // Convertir Float a Text antes de concatenar
    let tdsText = Float.toText(sensorData.TDS);
    let phText = Float.toText(sensorData.PH);
    let oxigenoText = Float.toText(sensorData.Oxigeno);

    // Construyendo la cadena JSON manualmente con claves en minúsculas
    "{ \"tds\": " # tdsText # ", \"ph\": " # phText # ", \"oxigeno\": " # oxigenoText # " }"
  }

  // Puedes añadir aquí más funciones según sea necesario.
}
