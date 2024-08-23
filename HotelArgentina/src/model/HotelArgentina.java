package model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class HotelArgentina {

	public static void main(String[] args) {
		try {
			String pathReservas= "./resources/reserva.csv";//args[0];
			String pathHotel= "./resources/habitacion.csv";//args[1];
			//String pathResultado= args[2];
			String mensajeHabitacion="";
			Reserva calculoEstadia = new Reserva ();
			//System.out.println(calculoEstadia.calculoEstadia("18/12/2021", "25/12/2021"));
			//System.out.println(calculoEstadia.calculoPaquete(6, 100, 4));//Paquete Bronce
			//System.out.println(calculoEstadia.calculoPaquete(10, 10000, 4));//Paquete Oro
			//System.out.println(calculoEstadia.calculoPaquete(12, 7500, 4));//Paquete Oro
			LeerArchivo leer = new LeerArchivo();
			leer.leerReservas(pathReservas);
			//LeerArchivo leer = new LeerArchivo();
			//leer.leerReservas(pathReservas);
			leer.leerHabitaciones(pathHotel);
		//	System.out.println(LeerArchivo.listaReser);
		//	System.out.println(LeerArchivo.listaHabit);
			for(String habitacion : LeerArchivo.listaHabit) {
				if(LeerArchivo.listaReser.contains(habitacion)){

					System.out.println("Habitacion ocupada Nro: "+habitacion);
				}else {System.out.println("Habitacion libre Nro: "+habitacion);}
			}

		}catch ( Exception e) {

			throw e;
		}
		
	}

}
