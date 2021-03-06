import { string, shape } from 'prop-types';
import { assertPropTypes } from 'check-prop-types';

const patternSchema = {
  name: string.isRequired,
  id: string,
};
export const pattern = (obj: any) => assertPropTypes(patternSchema, obj, 'property', 'pattern');