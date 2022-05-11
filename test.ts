// function identity(arg: any): any {
//   return arg;
// }
// type Generic = {
//   <T>(arg: T[]): T;
// };

// const identity3: Generic = function (arg) {
//   return arg;
// };

// identity3("a");

// type StringType = {
//   string(arg: string): string;
// };

// type NumberType = {
//   number(arg: number): number;
// };

// const useMultiType = <StringType, NumberType>(
//   arg1: StringType,
//   arg2: NumberType
// ): [StringType, NumberType] => {
//   return [arg1, arg2];
// };

// const test: <T>(params: T) => T = function (params) {
//   return params;
// };

// const a = test([1, 2, 3]);
// const b = test));
