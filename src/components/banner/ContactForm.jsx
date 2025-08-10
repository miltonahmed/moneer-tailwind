import { useFormik } from 'formik';
import simpleImage from '../../../src/assets/images/form-img.png';
import shape from '../../../src/assets/images/from-oval.png';
import Container from '../../Utils/Container';
import Image from '../../Utils/Image';
import Input from '../../Utils/Input';
import { formValidation } from '../../Utils/Validation/FormValidation';

const ContactForm = () => {
  const initialValues = {
    message: '',
    username: '',
    email: '',
    rememberMe: false,
  };

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: formValidation,
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <section className="py-30 relative mt-14 mb-24">
      <Image src={shape} className="absolute z-0 left-0 bottom-0" />
      <Container>
        <div className="">
          <div className="grid grid-cols-2 gap-[206px] items-center">
            <div className="">
              <Image
                className=" absolute left-0 bottom-0 w-[678px]"
                src={simpleImage}
              />
            </div>

            <div className="w-[534px]">
              <h3 className="font-montserrat text-text-blue text-[42px] font-bold mb-4">
                Need More Answers?
              </h3>
              <form onSubmit={Formik.handleSubmit}>
                <textarea
                  value={Formik.values.message}
                  onChange={Formik.handleChange}
                  name="message"
                  id="message"
                  type="text"
                  placeholder="Your Question"
                  className=" w-full h-[219px] border border-(--color-inputBorder) rounded-3xl px-4 py-2.5 placeholder:text-base placeholder:text-text-secondary placeholder:font-normal placeholder:font-lato placeholder:leading-7 outline-0"
                ></textarea>
                {Formik.touched.message && Formik.errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {Formik.errors.message}
                  </p>
                )}
                <div className="pt-[17px] pb-[21px] grid grid-cols-2 gap-[11px]">
                  <div>
                    <Input
                      value={Formik.values.username}
                      onChange={Formik.handleChange}
                      name="username"
                      id="username"
                      type="text"
                      placeholder="Your Name"
                      className="border border-(--color-inputBorder) w-full h-[48px] rounded-3xl px-4 py-2.5 placeholder:font-normal placeholder:font-lato placeholder:text-base placeholder:text-text-secondary placeholder:leading-7 outline-0 "
                    />
                    {Formik.touched.username && Formik.errors.username && (
                      <p className="text-red-500 text-sm mt-1">
                        {Formik.errors.username}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      value={Formik.values.email}
                      onChange={Formik.handleChange}
                      name="email"
                      id="email"
                      type="text"
                      placeholder="Your Email"
                      className="border border-(--color-inputBorder) w-full h-[48px] rounded-3xl px-4 py-2.5 placeholder:font-normal placeholder:font-lato placeholder:text-base placeholder:text-text-secondary placeholder:leading-7 outline-0 "
                    />
                    {Formik.touched.email && Formik.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {Formik.errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <label className="flex  items-center space-x-2">
                  <Input
                    name="rememberMe"
                    onChange={Formik.handleChange}
                    type="checkbox"
                    className="w-[18px] h-[18px] border border-(--color-checkBoxBorder) rounded-[4px]"
                  />
                  <span className="text-base font-lato font-normal text-text-secondary">
                    Remember Me
                  </span>
                </label>
                <button
                  type="submit"
                  className="py-4 px-14 btn-bg rounded-3xl text-sm text-white font-montserrat font-normal mt-6"
                >
                  Leave a Reply
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
