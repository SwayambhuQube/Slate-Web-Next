const BRAND_TYPE = {
  CORP: "CORP",
  SMLB: "SMLB",
  GOVT: "GOVT",
  EXBT: "EXBT",
  INST: "INST",
  PSTD: "PSTD",
  movie: "movie",
  theatre: "theatre",
  chain: "chain",
};

const BRAND_KEY = {
  [BRAND_TYPE.movie]: "movieId",
  [BRAND_TYPE.theatre]: "theatreId",
  [BRAND_TYPE.chain]: "chainId",
};

const BRANDS_TYPE = {
  PARENT_BRANDS: "parent-brands",
  INDIVIDUAL_BRANDS: "individual-brands",
  PRODUCTS: "products",
  VARIANTS: "variants",
};

const BRAND_TAG = {
  PARENT_BRANDS: "parentBrand",
  INDIVIDUAL_BRANDS: "individualBrand",
  PRODUCTS: "product",
  VARIANTS: "variant",
};

const BRAND_TAG_TYPE = {
  [BRAND_TAG.PARENT_BRANDS]: "parent-brands",
  [BRAND_TAG.INDIVIDUAL_BRANDS]: "individual-brands",
  [BRAND_TAG.PRODUCTS]: "products",
  [BRAND_TAG.VARIANTS]: "variants",
};
const BRAND_LABEL_NAME = {
  [BRANDS_TYPE.PARENT_BRANDS]: "Parent Brand",
  [BRANDS_TYPE.INDIVIDUAL_BRANDS]: "Individual Brand",
  [BRANDS_TYPE.PRODUCTS]: "Product",
  [BRANDS_TYPE.VARIANTS]: "Variant",
};

const GET_BRAND_ACTIONS = {
  [BRANDS_TYPE.PARENT_BRANDS]: "getParentBrandById",
  [BRANDS_TYPE.INDIVIDUAL_BRANDS]: "getIndividualBrandById",
  [BRANDS_TYPE.PRODUCTS]: "getProductById",
  [BRANDS_TYPE.VARIANTS]: "getVariantById",
};
const ADD_BRAND_TITLE = {
  [BRANDS_TYPE.PARENT_BRANDS]: "addParentBrand",
  [BRANDS_TYPE.INDIVIDUAL_BRANDS]: "addIndividualBrand",
  [BRANDS_TYPE.PRODUCTS]: "addProduct",
  [BRANDS_TYPE.VARIANTS]: "addVariant",
};
const UPDATE_BRAND_TITLE = {
  [BRANDS_TYPE.PARENT_BRANDS]: "updateParentBrand",
  [BRANDS_TYPE.INDIVIDUAL_BRANDS]: "updateIndividualBrand",
  [BRANDS_TYPE.PRODUCTS]: "updateProduct",
  [BRANDS_TYPE.VARIANTS]: "updateVariant",
};
const BRAND_TITLE = {
  [BRANDS_TYPE.PARENT_BRANDS]: "Parent Brands",
  [BRANDS_TYPE.INDIVIDUAL_BRANDS]: "Individual Brands",
  [BRANDS_TYPE.PRODUCTS]: "Products",
  [BRANDS_TYPE.VARIANTS]: "Variants",
};
const DEFAULT_BRAND_KEY = {
  [BRANDS_TYPE.PARENT_BRANDS]: {
    id: "",
    name: "",
    businessType: "",
    advertiserIds: [],
    categoryIds: [],
    categories: [],
  },
  [BRANDS_TYPE.INDIVIDUAL_BRANDS]: {
    id: "",
    name: "",
    parentBrandId: "",
    advertiserIds: [],
    categoryIds: [],
    categories: [],
  },
  [BRANDS_TYPE.PRODUCTS]: {
    id: "",
    name: "",
    productIdentificationNumber: "",
    productIdentificationNumberTypeId: "",
    individualBrandId: "",
    parentBrandId: "",
    advertiserIds: [],
    categoryIds: [],
    categories: [],
  },
  [BRANDS_TYPE.VARIANTS]: {
    id: "",
    name: "",
    parentBrandId: "",
    individualBrandId: "",
    productId: "",
    variantIdentificationNumberTypeId: "",
    variantIdentificationNumber: "",
  },
};

const BRAND_TAB_IDS = ["details", "individual-brands", "products", "variants"];

const ERROR_MESSAGE = {
  name: "Enter Valid Name",
  parentBrandName: "Select parent brand",
  individualBrandName: "Select individual brand",
  productName: "Select product name",
  businessType: "Select parent brand type",
  productIdentificationNumber: "Enter the product code",
  variantIdentificationNumber: "Enter the variant code",
};

export {
  BRAND_TYPE,
  BRAND_TITLE,
  BRAND_KEY,
  BRANDS_TYPE,
  BRAND_TAG,
  BRAND_TAG_TYPE,
  GET_BRAND_ACTIONS,
  ADD_BRAND_TITLE,
  UPDATE_BRAND_TITLE,
  DEFAULT_BRAND_KEY,
  BRAND_TAB_IDS,
  BRAND_LABEL_NAME,
  ERROR_MESSAGE,
};
