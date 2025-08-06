import Container from '../../Utils/Container';

const BlockChain = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1">
          <div>
            <h1>Milton</h1>
          </div>
          <div className="w-[553px]">
            <h3 className="font-montserrat font-bold text-4xl leading-12 text-text-primary">
              Moving your Existing Solution to the Blockchain
            </h3>
            <div className='grid grid-cols-1 gap-x-2.5'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="6"
                viewBox="0 0 7 6"
                fill="none"
              >
                <ellipse
                  cx="3.56287"
                  cy="3"
                  rx="3.09265"
                  ry="3"
                  fill="#FF357D"
                />
              </svg>
              <div>
                <h4>Pre-Sale Starts</h4>
                <span>August 23, 2021</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlockChain;
