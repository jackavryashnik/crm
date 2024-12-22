import AddCompanyBtn from './components/AddCompanyBtn';
import MagicButton from './components/MagicBtn';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyBtn />
      <MagicButton/>
    </main>
  );
}
