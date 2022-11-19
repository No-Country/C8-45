import img1 from '../../assets/maintenance.png';

function Maintenance() {
  return (
    <section className="h-[84vh] flex flex-col items-center justify-center">
      <div>
        <img alt=" " src={img1} className="h-32" />
      </div>
      <h2 className="text-3xl font-title mt-10">Page under maintance </h2>
      <span className="text-lg font-poppins">
        Sorry for bothering you, we will be back soon!🥲
      </span>
    </section>
  );
}

export default Maintenance;
