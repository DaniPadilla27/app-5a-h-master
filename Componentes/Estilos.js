import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7d9f3',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  // Estilos del boton
  boton: {
    backgroundColor: '#64a0d6', // Azul más oscuro
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textoB: {
    color: 'white',
    fontSize: 20,
  },
  logoB: {
    height: 35,
    width: 35,
    marginRight: 7,
  },
  // Estilos de la caja
  boxContainer: {
    borderColor: '#4579a7', // Azul medio
    borderWidth: 2,
    borderRadius: 5,
    height: 70,
    margin: 15,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 5,
  },
  TextBox: {
    fontSize: 30,
  },
  // Estilo de contenedor de los botones
  botonescontainer: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
