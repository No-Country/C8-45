import SearchBar from '../molecules/SearchBar';

function Landing() {
  return (
    <main className="min-h-screen">
      <div className="w-10/12 mx-auto sm:w-8/12 md:w-6/12 lg:w-4/12">
        <SearchBar />
      </div>
    </main>
  );
}

export default Landing;
