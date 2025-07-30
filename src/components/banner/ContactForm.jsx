import FormImage from '../../../src/assets/images/form-img.png';
import Container from '../../Utils/Container';
import Image from '../../Utils/Image';
import Input from '../../Utils/Input';

const ContactForm = () => {
  return (
    <section className="py-30">
      <Container>
        <div className="patent">
          <div className="grid grid-cols-2">
            <div className="max-w-[671px] h-[591px] ">
              <Image src={FormImage} className="w-full" />
            </div>

            <div className="">
              <h3 className="font-montserrat text-text-blue text-[42px] font-bold mb-4">
                Need More Answers?
              </h3>
              <form>
                <textarea
                  placeholder="Your Question"
                  className=" w-full h-[219px] border border-(--color-inputBorder) rounded-3xl px-4 py-2.5 placeholder:text-base placeholder:text-text-secondary placeholder:font-normal placeholder:font-lato placeholder:leading-7"
                ></textarea>
                <div className="pt-[17px] pb-[21px] grid grid-cols-2 gap-[11px]">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="border border-(--color-inputBorder) h-[48px] rounded-3xl px-4 py-2.5 placeholder:font-normal placeholder:font-lato placeholder:text-base placeholder:text-text-secondary placeholder:leading-7 "
                  />
                  <Input
                    type="text"
                    placeholder="Your Email"
                    className="border border-(--color-inputBorder) h-[48px] rounded-3xl px-4 py-2.5 placeholder:font-normal placeholder:font-lato placeholder:text-base placeholder:text-text-secondary placeholder:leading-7 "
                  />
                </div>
                <label className="flex  items-center space-x-2">
                  <Input
                    type="checkbox"
                    className="w-[18px] h-[18px] border border-(--color-checkBoxBorder) rounded-[4px]"
                  />
                  <span className="text-base font-lato font-normal text-text-secondary">
                    Remember Me
                  </span>
                </label>
                <button className="py-4 px-14 btn-bg rounded-3xl text-sm text-white font-montserrat font-normal mt-6">
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
