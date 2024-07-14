export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance | HMO Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Your Passport | Full Picture",
  "Office ID Card",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Odunayo Adeleke",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Isaac Johnson",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Sakinat Lawal",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Mary Mariam",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Kante Drogba",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Shata Wale",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Iliyas Mallam",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Sodiq Ibramhim",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
