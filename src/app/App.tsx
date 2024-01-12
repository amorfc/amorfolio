import "./App.css";
import AppLayout from "../components/view/AppLayout";
import BaseView from "../components/view/BaseView";

function App() {
  return (
    <AppLayout>
      <BaseView className="m-3 basis-1/4"></BaseView>
      <BaseView className="m-3 basis-1/2"></BaseView>
    </AppLayout>
  );
}

export default App;
