import Types "Types";
import Cycles "mo:base/ExperimentalCycles";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import Debug "mo:base/Debug";

actor {
  let ic : Types.IC = actor "aaaaa-aa"; // Management Canister ID

  public func fetchPersonData() : async Text {
    // Definir URL de la nueva API
    let url: Text = "https://bdmtk.onrender.com/datos_personales";

    // Definir encabezados HTTP
    let request_headers = [
      { name = "Host"; value = "bdmtk.onrender.com" },
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

  public func processPersonData() : async Text {
    // Llamar a la función para obtener los datos
    let rawData: Text = await fetchPersonData();

    // Aquí puedes procesar los datos como JSON
    Debug.print("Raw Data: " # rawData);

    // Dado que es un JSON de array de objetos, simplemente lo retornamos
    // Puedes hacer un parsing más detallado si es necesario
    return "Processed data: " # rawData;
  }

  // Puedes añadir aquí más funciones según sea necesario.
}
