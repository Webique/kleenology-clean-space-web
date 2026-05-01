export interface NeighborhoodData {
  slug: string;
  nameAr: string;
  fullNameAr: string;
  district: string;
}

export const neighborhoods: NeighborhoodData[] = [
  // شمال الرياض
  { slug: "malqa",        nameAr: "الملقا",       fullNameAr: "حي الملقا",       district: "شمال الرياض" },
  { slug: "narjis",       nameAr: "النرجس",       fullNameAr: "حي النرجس",       district: "شمال الرياض" },
  { slug: "yasmin",       nameAr: "الياسمين",     fullNameAr: "حي الياسمين",     district: "شمال الرياض" },
  { slug: "nakhil",       nameAr: "النخيل",       fullNameAr: "حي النخيل",       district: "شمال الرياض" },
  { slug: "sahafa",       nameAr: "الصحافة",      fullNameAr: "حي الصحافة",      district: "شمال الرياض" },
  { slug: "nada",         nameAr: "الندى",        fullNameAr: "حي الندى",        district: "شمال الرياض" },
  { slug: "rahmaniyya",   nameAr: "الرحمانية",    fullNameAr: "حي الرحمانية",    district: "شمال الرياض" },
  { slug: "zahraa",       nameAr: "الزهراء",      fullNameAr: "حي الزهراء",      district: "شمال الرياض" },
  { slug: "muhammadiyya", nameAr: "المحمدية",     fullNameAr: "حي المحمدية",     district: "شمال الرياض" },
  { slug: "hittin",       nameAr: "حطين",         fullNameAr: "حي حطين",         district: "شمال الرياض" },
  // وسط الرياض
  { slug: "olaya",        nameAr: "العليا",       fullNameAr: "حي العليا",       district: "وسط الرياض" },
  { slug: "sulaymaniyya", nameAr: "السليمانية",   fullNameAr: "حي السليمانية",   district: "وسط الرياض" },
  { slug: "malaz",        nameAr: "الملز",        fullNameAr: "حي الملز",        district: "وسط الرياض" },
  { slug: "murabba",      nameAr: "المربع",       fullNameAr: "حي المربع",       district: "وسط الرياض" },
  { slug: "bathaa",       nameAr: "البطحاء",      fullNameAr: "حي البطحاء",      district: "وسط الرياض" },
  // شرق الرياض
  { slug: "rawdha",       nameAr: "الروضة",       fullNameAr: "حي الروضة",       district: "شرق الرياض" },
  { slug: "qurtuba",      nameAr: "قرطبة",        fullNameAr: "حي قرطبة",        district: "شرق الرياض" },
  { slug: "fayha",        nameAr: "الفيحاء",      fullNameAr: "حي الفيحاء",      district: "شرق الرياض" },
  // غرب الرياض
  { slug: "worood",       nameAr: "الورود",       fullNameAr: "حي الورود",       district: "غرب الرياض" },
  { slug: "rabwah",       nameAr: "الربوة",       fullNameAr: "حي الربوة",       district: "غرب الرياض" },
  { slug: "badiya",       nameAr: "البديعة",      fullNameAr: "حي البديعة",      district: "غرب الرياض" },
  { slug: "raid",         nameAr: "الرائد",       fullNameAr: "حي الرائد",       district: "غرب الرياض" },
  { slug: "wadi",         nameAr: "الوادي",       fullNameAr: "حي الوادي",       district: "غرب الرياض" },
  // جنوب الرياض
  { slug: "aziziyya",    nameAr: "العزيزية",     fullNameAr: "حي العزيزية",     district: "جنوب الرياض" },
  { slug: "shafa",        nameAr: "الشفا",        fullNameAr: "حي الشفا",        district: "جنوب الرياض" },
];

export const getNeighborhood = (slug: string) =>
  neighborhoods.find(n => n.slug === slug) ?? null;
