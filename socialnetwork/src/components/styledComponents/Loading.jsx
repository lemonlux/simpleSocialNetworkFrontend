import { ProgressSpinner } from 'primereact/progressspinner';
import { FlexDir } from './FlexDir';

export const Loading = () => {
  return (
    <>
    <FlexDir width={"98vw"} margin={"22vh 0 30vh"}>
   <ProgressSpinner />
   </FlexDir>
    </>
  )
}
