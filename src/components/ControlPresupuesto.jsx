const ControlPresupuesto = ({ presupuesto }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>GRÁFICA AQUÍ</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> ${presupuesto}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
