import React from "react";
import { useCotizacion } from "../../Context/Context";

const FormularioCotizacion: React.FC = () => {
  const {
    selectedOption,
    setSelectedOption,
    projectDetails,
    setProjectDetails,
    customerInfo,
    setCustomerInfo,
    additionalServices,
    setAdditionalServices,
    termsAgreed,
    setTermsAgreed,
    termsTouched,
    setTermsTouched,
  } = useCotizacion();

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);

    setProjectDetails({
      location: "",
      dimensions: "",
      budget: "",
      timeline: "",
      reformType: "",
      ancho: 0,
      altura: 0,
      numCapas: 0,
      otherDetails: "",
      paintingOptions: "",
      constructionType: "",
      demolitionType: "",
      cambioArmariosDetails: "",
      cantidadParedes: "1",
      anchoPared1: 0,
      alturaPared1: 0,
      anchoPared2: 0,
      alturaPared2: 0,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    category: string
  ) => {
    if (category === "projectDetails") {
      setProjectDetails((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));

      if (e.target.name === "reformType" && e.target.value !== "pared") {
        setProjectDetails((prev) => ({ ...prev, ancho: 0, altura: 0 }));
      }
    } else if (category === "customerInfo") {
      setCustomerInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else if (category === "additionalServices") {
      setAdditionalServices(e.target.value);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAgreed(e.target.checked);
  };
  const handleCheckboxBlur = () => {
    setTermsTouched(true);
  };

  const isNameValid = customerInfo.name.trim() !== "";
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email);
  const isPhoneValid = /^\d{10}$/.test(customerInfo.phone);
  const isTermsValid = termsAgreed && termsTouched;
  const isFormValid =
    isNameValid && isEmailValid && isPhoneValid && isTermsValid;
  const nameError = !isNameValid && "Por favor, ingresa tu nombre.";
  const emailError =
    !isEmailValid && "Por favor, ingresa un correo electrónico válido.";
  const phoneError =
    !isPhoneValid && "Por favor, ingresa un número de teléfono válido.";

  const renderReformOptions = () => (
    <div>
      <label className="block mb-2 text-2xl ">Tipo de reforma:</label>
      <select
        value={projectDetails.reformType}
        onChange={(e) => handleInputChange(e, "projectDetails")}
        name="reformType"
        className="border rounded py-2 px-3 mb-4 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Selecciona el tipo de reforma</option>
        <option value="pintura">Pintura</option>
        <option value="cambioArmarios">Cambio Armarios</option>
      </select>

      {projectDetails.reformType === "pintura" && (
        <div className="flex flex-wrap justify-between">
          <label>Ancho (cm):</label>
          <input
            type="number"
            name="ancho"
            value={projectDetails.ancho}
            onChange={(e) => handleInputChange(e, "projectDetails")}
            className="border rounded  w-24 h-8 py-2 px-3 mb-4 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label>Altura (cm):</label>
          <input
            type="number"
            name="altura"
            value={projectDetails.altura}
            onChange={(e) => handleInputChange(e, "projectDetails")}
            className="border rounded  w-24 h-8 py-2 px-3 mb-4  bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label>Número de capas:</label>
          <input
            type="number"
            name="numCapas"
            value={projectDetails.numCapas}
            onChange={(e) => handleInputChange(e, "projectDetails")}
            className="border rounded w-24 h-8 py-2 px-3 mb-4 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      )}

      {projectDetails.reformType === "cambioArmarios" && (
        <div className="flex items-center">
          <label className="text-center mr-2 text-xl lg:whitespace-nowrap">
            Detalles del cambio de armarios:
          </label>
          <textarea
            name="cambioArmariosDetails"
            value={projectDetails.cambioArmariosDetails}
            onChange={(e) => handleInputChange(e, "projectDetails")}
            className="border rounded w-full  py-2 px-3 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      )}
    </div>
  );

  const renderConstructionOptions = () => (
    <div>
      <label className="block mb-2 text-2xl ">Tipo de construcción:</label>

      <select
        value={projectDetails.constructionType}
        onChange={(e) => handleInputChange(e, "projectDetails")}
        name="constructionType"
        className="border rounded py-2 px-3 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Selecciona el tipo de construcción</option>
        <option value="cocina">Cocina</option>
        <option value="cuartoBano">Cuarto de Baño</option>
        <option value="habitacion">Habitación</option>
      </select>
    </div>
  );

  const renderDemolitionOptions = () => (
    <div>
      <label className="block mb-2 text-2xl ">Tipo de demolición:</label>
      <select
        value={projectDetails.demolitionType}
        onChange={(e) => handleInputChange(e, "projectDetails")}
        name="demolitionType"
        className="border rounded py-2 px-3 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Selecciona el tipo de demolición</option>
        <option value="pared">Pared</option>
        <option value="cocina">Cocina</option>
        <option value="cuartoBano">Cuarto de Baño</option>
      </select>

      {projectDetails.demolitionType === "pared" && (
        <div>
          <label>Cantidad de Paredes:</label>
          <select
            name="cantidadParedes"
            value={projectDetails.cantidadParedes}
            onChange={(e) => handleInputChange(e, "projectDetails")}
            className="border rounded py-2 px-3 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>

          {[...Array(Number(projectDetails.cantidadParedes))].map(
            (_, index) => (
              <div key={index}>
                <label>Medidas de Pared {index + 1}:</label>
                <div>
                  <label>Ancho (cm):</label>
                  <input
                    type="number"
                    name={`anchoPared${index + 1}`}
                    value={projectDetails[`anchoPared${index + 1}`]}
                    onChange={(e) => handleInputChange(e, "projectDetails")}
                    className="border rounded py-2 px-3 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label>Altura (cm):</label>
                  <input
                    type="number"
                    name={`alturaPared${index + 1}`}
                    value={projectDetails[`alturaPared${index + 1}`]}
                    onChange={(e) => handleInputChange(e, "projectDetails")}
                    className="border rounded py-2 px-3 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="mt-8 max-w-4xl mx-auto md:mx-auto md:mr-0 text-texto text-center p-6 ">
        <div className="container mx-auto flex flex-wrap  items-start">
          <div className="w-full lg:w-1/2 px-2 mb-4 mt-4 mx-auto">
            <h1 className="text-3xl text-texto text-center">PRESUPUESTO</h1>
          </div>
        </div>
        <div className="mt-4 ">
          <label className="block mb-2 text-2xl ">Tipo de Presupuesto:</label>
          <select
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
            className="border rounded py-2 px-3 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecciona una opción</option>
            <option value="reformar">Reformar</option>
            <option value="construccion">Construcción</option>
            <option value="demolicion">Demolición</option>
          </select>
        </div>

        {selectedOption === "reformar" && renderReformOptions()}

        {selectedOption === "construccion" && renderConstructionOptions()}

        {selectedOption === "demolicion" && renderDemolitionOptions()}

        <div className="mt-4">
          <label className="block mb-2 text-xl ">Ubicación del Proyecto:</label>
          <input
            type="text"
            name="location"
            value={projectDetails.location}
            onChange={(e) => handleInputChange(e, "projectDetails")}
            className="border rounded w-full py-2 px-3 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-xl ">Otros detalles:</label>
          <textarea
            name="additionalServices"
            value={additionalServices}
            onChange={(e) => handleInputChange(e, "additionalServices")}
            className="border rounded w-full py-2 px-3 bg-navbar2 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-xl ">Nombre:</label>
          <input
            type="text"
            name="name"
            value={customerInfo.name}
            onChange={(e) => handleInputChange(e, "customerInfo")}
            className="bg-gray-50 border border-gray-300 bg-navbar2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {termsTouched && nameError && (
            <p className="text-red-500">{nameError}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-xl ">Email:</label>
          <input
            type="email"
            name="email"
            value={customerInfo.email}
            onChange={(e) => handleInputChange(e, "customerInfo")}
            className="bg-gray-50 border border-gray-300 bg-navbar2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {termsTouched && emailError && (
            <p className="text-red-500">{emailError}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-xl ">Teléfono:</label>
          <input
            type="tel"
            name="phone"
            value={customerInfo.phone}
            onChange={(e) => handleInputChange(e, "customerInfo")}
            className="bg-gray-50 border border-gray-300 bg-navbar2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {termsTouched && phoneError && (
            <p className="text-red-500">{phoneError}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="flex items-center mb-2 text-xl font-bold">
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={handleCheckboxChange}
              onBlur={handleCheckboxBlur}
              className="mr-2 bg-navbar2"
            />
            Acepto los términos y condiciones
          </label>
          {termsTouched && !termsAgreed && (
            <p className="text-red-500">
              Debes aceptar los términos y condiciones.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className=" mt-4 bg-navbar2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar Cotización
        </button>
      </div>
    </>
  );
};

export default FormularioCotizacion;
