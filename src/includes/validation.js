import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage,configure } from 'vee-validate';
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
        app.component('ErrorMessage', ErrorMessage);

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
        configure({
            generateMessage: (ctx) => {
                const messages = {
                    required: `${ctx.field} maydonini kiritish shart`,
                    min: `${ctx.field} maydonini juda kam`,
                    max: `${ctx.field} maydonini o'ta ko'p`,
                    alpha_spaces: `${ctx.field} maydonini faqat alfabet hariflari va probel kabul kiladi`,
                    email: `${ctx.field} maydonini yaroqlibo'lishi shart`,
                    min_value: `${ctx.field} maydonini juda past`,
                    max_value: `${ctx.field} maydonini juda baland`,
                    excluded: `Ushbu ${ctx.field} qiymatdan maydon uchun foydalanishga ruxsat berilmagan.`,
                    country_excluded: `Cheklovlar tufayli biz bu joydan foydalanuvchilarni qabul qilmaymiz.`,
                    confirmed: "Parollar mos emas",
                    tos: "Xizmat shartlarini qabul qilishingiz kerak",
                };
                
                const message = messages[ctx.rule.name] 
                ? messages[ctx.rule.name] 
                : `The field ${ctx.field} is invalid`;

                return message;
            },

            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true
        });

    },

};