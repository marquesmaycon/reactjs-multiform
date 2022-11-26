import { FormProvider } from "./contexts/FormContext";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { coldTheme, bubblegumTheme } from "./themes/themes";

const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}
export default App;