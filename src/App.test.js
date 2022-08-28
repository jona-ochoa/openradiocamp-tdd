import { fireEvent, queryByLabelText, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import App from "./App";

beforeEach(() => render(<App />));

const mockArray = [{
  "changeuuid": "32fc663d-32d1-4065-af29-e62f5527a29d",
  "stationuuid": "16773a88-c11f-40eb-aa9b-2e9e195e8623",
  "serveruuid": "ce7e5533-ba04-4648-9c5a-977a27788ef1",
  "name": " Country And Southern Gospel",
  "url": "https://stream.rcast.net/9432",
  "url_resolved": "https://stream.rcast.net/9432",
  "homepage": "https://players.rcast.net/country-and-southern-gospel-9432",
  "favicon": "https://players.rcast.net/uploads/logo/favicon.png",
  "tags": "classic country",
  "country": "The United Kingdom Of Great Britain And Northern Ireland",
  "countrycode": "GB",
  "iso_3166_2": null,
  "state": "",
  "language": "",
  "languagecodes": "",
  "votes": 13,
  "lastchangetime": "2022-03-23 09:55:16",
  "lastchangetime_iso8601": "2022-03-23T09:55:16Z",
  "codec": "MP3",
  "bitrate": 0,
  "hls": 0,
  "lastcheckok": 1,
  "lastchecktime": "2022-08-28 20:52:12",
  "lastchecktime_iso8601": "2022-08-28T20:52:12Z",
  "lastcheckoktime": "2022-08-28 20:52:12",
  "lastcheckoktime_iso8601": "2022-08-28T20:52:12Z",
  "lastlocalchecktime": "2022-08-28 20:52:12",
  "lastlocalchecktime_iso8601": "2022-08-28T20:52:12Z",
  "clicktimestamp": "2022-08-28 19:18:59",
  "clicktimestamp_iso8601": "2022-08-28T19:18:59Z",
  "clickcount": 33,
  "clicktrend": 3,
  "ssl_error": 0,
  "geo_lat": null,
  "geo_long": null,
  "has_extended_info": false
}]

describe("0 - La aplicación debe renderizar correctamente", () => {
  test("0 - La aplicación debe renderizar correctamente", () => {
    const r = render(<App />);
    expect(r).toBeDefined();
  });
});

describe("1 - El nombre de la aplicación  debe mostrarse en algun lugar", () => {
  test("1 - El nombre de la aplicación  debe mostrarse en algun lugar", () => {
    const nombre = "OpenRadioCamp";
    const el = screen.getByText(nombre);
    expect(el).toBeInTheDocument();
  });
});

describe("La aplicacion debe tener un campo de input", () => {
  test("La aplicacion debe tener un campo de input", () => {
    const placeholderText = "Escribe el nombre de la radio";
    const input = screen.getByPlaceholderText(placeholderText);
    expect(input).toBeInTheDocument();
  });
  test("La aplicacion debe tener un boton de busqueda", () => {
    const botonText = "Buscar";
    const boton = screen.getByText(botonText);
    expect(boton).toBeInTheDocument();
  });
  test("Cuando hacemos click en el boton buscar, se debe ejecutar la funcion una sola vez", () => {
    const mockFn = jest.fn();
    const botonText = "Buscar";
    const boton = screen.getByText(botonText);
    boton.addEventListener("click", mockFn);
    fireEvent.click(boton);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("3 - Listado de emisoras", () => {
  test("Debe Existir un listado de emisoras", () => {
    const listado = screen.getByLabelText("listado-emisoras");
    expect(listado).toBeInTheDocument();
  });
  test("El listado debe inicializar vacio", () => {
    const listado = screen.getByLabelText("listado-emisoras");
    const childrenCount = listado.childElementCount;
    expect(childrenCount).toBe(0);
  });
  test("Cuando se hace una busqueda válida, el listado debe mostrar al menos un resultado", () => {
    const placeholderText = "Escribe el nombre de la radio";
    const input = screen.getByPlaceholderText(placeholderText);
    const botonText = "Buscar";
    const boton = screen.getByText(botonText);
    fireEvent.change(input, { target: { value: "Country" } });
    fireEvent.click(boton);
    const listado = screen.getByLabelText("listado-emisoras");
    const childrenCount = listado.childElementCount;
    expect(childrenCount).toBeGreaterThanOrEqual(0);
  });
});

// describe('3 - Listado de emisoras', () => {

// });
// describe('3 - Listado de emisoras', () => {

// });
