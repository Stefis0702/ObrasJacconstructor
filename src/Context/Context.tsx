import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface ProjectDetails {
  location: string;
  dimensions: string;
  budget: string;
  timeline: string;
  reformType: string;
  ancho: number;
  altura: number;
  numCapas?: number;
  otherDetails?: string;
  paintingOptions?: string;
  constructionType?: string;
  demolitionType?: string;
  cambioArmariosDetails?: string;
  cantidadParedes: "1";
  anchoPared1: number;
  alturaPared1: number;
  anchoPared2: number;
  alturaPared2: number;
  [key: string]: any;
}

interface CotizacionContextProps {
  
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  customerInfo: CustomerInfo;
  setCustomerInfo: Dispatch<SetStateAction<CustomerInfo>>;
  projectDetails: ProjectDetails;
  setProjectDetails: Dispatch<SetStateAction<ProjectDetails>>;
  additionalServices: string;
  setAdditionalServices: Dispatch<SetStateAction<string>>;
  termsAgreed: boolean;
  setTermsAgreed: Dispatch<SetStateAction<boolean>>;
  termsTouched: boolean;
  setTermsTouched: Dispatch<SetStateAction<boolean>>;
  }

const CotizacionContext = createContext<CotizacionContextProps | undefined>(
  undefined
);

interface CotizacionProviderProps {
  children: ReactNode;
}

export const CotizacionProvider: React.FC<CotizacionProviderProps> = ({
  children,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
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
  const [additionalServices, setAdditionalServices] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [termsTouched, setTermsTouched] = useState(false);

  const contextValue: CotizacionContextProps = {
    selectedOption,
    setSelectedOption,
    customerInfo,
    setCustomerInfo,
    projectDetails,
    setProjectDetails,
    additionalServices,
    setAdditionalServices,
    termsAgreed,
    setTermsAgreed,
    termsTouched,
    setTermsTouched,
    
  };

  return (
    <CotizacionContext.Provider value={contextValue}>
      {children}
    </CotizacionContext.Provider>
  );
};

export const useCotizacion = (): CotizacionContextProps => {
  const context = useContext(CotizacionContext);
  if (!context) {
    throw new Error(
      "useCotizacion debe ser utilizado dentro de un CotizacionProvider"
    );
  }
  return context;
};
