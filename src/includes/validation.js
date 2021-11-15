import { Form as VeeForm, Field as VeeField, defineRule } from 'vee-validate';
import {
    required,
    min,
    max,
    alpha_spaces as alphaSpaces,
    max_value as maxVal, min_value as minVal,
    email, confirmed, not_one_of as excluded
} from '@vee-validate/rules';

export default {
    install(app) {
        app.component('VeeForm', VeeForm);
        app.component('VeeField', VeeField);

        defineRule('required', required);
        defineRule('tos', required); 
        defineRule('min', min); 
        defineRule('max', max); 
        defineRule('alpha_spaces',alphaSpaces); 
        defineRule('email', email); 
        defineRule('min_value', minVal); 
        defineRule('max_value', maxVal); 
        defineRule('confirmed', confirmed); 
        defineRule('excluded', excluded); 
        defineRule('country_excluded', excluded); 

    },

};