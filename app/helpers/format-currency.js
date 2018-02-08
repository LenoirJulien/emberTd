import { helper } from '@ember/component/helper';

export function formatCurrency(value,options/*, hash*/) {
  let symbol = options.symbol || '€';
  return value+" "+symbol;
}

export default helper(formatCurrency);
