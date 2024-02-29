export const userInfoExtract = (user: any) => {
  const {
    company: {
      customerSegment: { code },
      status,
    },
    roles,
  } = user;
  if (!code || !status || !roles) return {};
  return {
    company: {
      customerSegment: { code },
      status,
    },
    roles,
  };
};
