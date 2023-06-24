import { Cover } from "../components/Cover";
import { Category } from "../components/Category";
import  ScrollTopOnRoute  from "../components/ScrollTopOnRoute";


export function Home() {

  return (
    <>
      <ScrollTopOnRoute />
      <Cover />
      <Category />
    </>
  );
}
