export const persianToEnglish = (str: string) => {
  // @ts-ignore
  return str.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
};
