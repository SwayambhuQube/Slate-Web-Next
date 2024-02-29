const VERIFICATION_ACTIONS = {
  UPDATE: "Update",
  ADD: "Add",
};

const VERIFICATION_STATUSES = {
  PENDING: "Pending",
  APPROVED: "Approve",
  MERGED: "Merge",
  REJECTED: "Reject",
};

const BRANDS = ["parentBrand", "individualBrand", "product", "variant"];

const VERIFICATION_DETAIL_FIELDS = {
  parentBrand: [
    { name: "Parent Brand", accessor: "name" },
    { name: "Type", accessor: "businessType" },
    { name: "Parent Brand Code", accessor: "code" },
    { name: "Individual Brands", accessor: "countIndividualBrands" },
    { name: "Advertisers", accessor: "advertisers" },
    { name: "Categories", accessor: "categories" },
  ],
  individualBrand: [
    { name: "Individual Brand", accessor: "name" },
    { name: "Individual Brand Code", accessor: "code" },
    { name: "Products", accessor: "countProducts" },
    { name: "Parent Brand", accessor: "parentBrandName" },
    { name: "Type", accessor: "businessType" },
    { name: "Advertisers", accessor: "advertisers" },
    { name: "Categories", accessor: "categories" },
  ],
  product: [
    { name: "Product", accessor: "name" },
    { name: "Product Code", accessor: "code" },
    { name: "Variants", accessor: "countVariants" },
    { name: "Individual Brand", accessor: "individualBrandName" },
    { name: "Parent Brand", accessor: "parentBrandName" },
    { name: "Type", accessor: "businessType" },
    { name: "Advertisers", accessor: "advertisers" },
    { name: "Categories", accessor: "categories" },
    { name: "Product Identification Number", accessor: "productIdentificationNumber" },
  ],
  variant: [
    { name: "Variant", accessor: "name" },
    { name: "Variant Code", accessor: "code" },
    { name: "Product", accessor: "productName" },
    { name: "Individual Brand", accessor: "individualBrandName" },
    { name: "Parent Brand", accessor: "parentBrandName" },
    { name: "Type", accessor: "businessType" },
    { name: "Advertisers", accessor: "advertisers" },
    { name: "Categories", accessor: "categories" },
    { name: "Variant Identification Number", accessor: "variantIdentificationNumber" },
  ],
};

export { VERIFICATION_ACTIONS, VERIFICATION_STATUSES, BRANDS, VERIFICATION_DETAIL_FIELDS };
