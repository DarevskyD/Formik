import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const OptimizeForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        amount: 0,
        currency: "",
        text: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Обязательное поле")
          .min(2, "Минимум 2 символа"),
        email: Yup.string()
          .required("Обязательное поле")
          .email("Неправильный email"),
        amount: Yup.number().required("Обязательное поле").min(5, "Не менее 5"),
        currency: Yup.string().required("Выберите валюту"),
        text: Yup.string().min(10, "Минимум 10 символов"),
        terms: Yup.boolean()
          .required("Необходимо согласие")
          .oneOf([true], "Необходимо согласие"),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <h2>Отправить пожертвование</h2>
        <label htmlFor="name">Ваше имя</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" component="div" className="error" />
        <label htmlFor="email">Ваша почта</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage name="email" component="div" className="error" />
        <label htmlFor="amount">Количество</label>
        <Field id="amount" name="amount" type="number" />
        <ErrorMessage name="amount" component="div" className="error" />
        <label htmlFor="currency">Валюта</label>
        <Field id="currency" name="currency" as="select">
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
        </Field>
        <ErrorMessage name="currency" component="div" className="error" />
        <label htmlFor="text">Ваше сообщение</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage name="text" component="div" className="error" />
        <label className="checkbox">
          <Field name="terms" type="checkbox" />
          <ErrorMessage name="terms" component="div" className="error" />
          Соглашаетесь с политикой конфиденциальности?
        </label>
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default OptimizeForm;
