const Form = ({ mensaje, setMensaje }) => {
  const handleChange = (evento) => {
    setMensaje(evento.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          value={mensaje}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Form;
