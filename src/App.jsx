import { BiCheck } from "react-icons/bi";
import { Toaster, toast } from "sonner";

function uploadFile() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}
function App() {
  return (
    <div>
      <h1> Hola mundo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam labore
        repellendus esse ipsa non a quos eligendi dolore est facere, quisquam
        voluptates iusto soluta repudiandae alias cupiditate maiores atque!
      </p>
      <button
        onClick={() => {
          // toast("Términos aceptados", {
          //   description: "gracias por aceptar los términos",
          //   icon: <BiCheck style={{ color: "green" }} />,
          // });
          toast.success("Términos aceptados");
        }}
      >
        Aceptar{" "}
      </button>
      <button
        onClick={() => {
          toast.error("Términos denegados");
        }}
      >
        Denegar
      </button>
      <button
        onClick={() => {
          toast("My action toast", {
            action: {
              label: "Action",
              onClick: () => console.log("Action!"),
            },
          });
        }}
      >
        automatico
      </button>

      <button
        onClick={() => {
          toast.promise(uploadFile, {
            error: "Error al subir el archivo",
            success: "Archivo subido",
            loading: "Subiendo archivo...",
          });
        }}
      >
        Upload
      </button>
      <Toaster />
    </div>
  );
}

export default App;
