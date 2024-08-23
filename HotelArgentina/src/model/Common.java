package model;
import java.util.ArrayList;
import java.util.List;
public class Common {

	public static double ticket= 700;
	public static int estadiaCorta=5; 
	public static int estadiaLarga=10;
	public static double paqueteGold=0.15; 
	public static double paqueteBroce=0.15; 
	public static double descuentoTicket=0.10; 
	private static Amenities amenities; 
	private static TipoHabitacion tipohabitacion; 

	public static TipoHabitacion asignarTipo(int n) {
		//cambiar estructura IF POR SWICTH CASE 
		//cambiar de INT- A LISTA DE OBJETOS DE AMENITIES
		//Cambiar ubicaci�n de m�todo, crear una clase de cosas comunes
		if( n==1) {
			return tipohabitacion= tipohabitacion.INDIVIDUAL;
		}else if(n==2) {
			return tipohabitacion=tipohabitacion.DUPLEX;
		}else if(n==3){
			return tipohabitacion=tipohabitacion.TRIPLE;
		}else if(n==4) {
			return tipohabitacion=tipohabitacion.CUADRUPLE;
		}
		return null;
	}
	
	public static Amenities asignarAmenities(int n) {
		//cambiar estructura IF POR SWICTH CASE 
		//cambiar de INT- A LISTA DE OBJETOS DE AMENITIES
		//Cambiar ubicaci�n de m�todo, crear una clase de cosas comunes
		if( n==0) {
			return amenities= amenities.JACUZZI;
		}else if(n==1) {
			return amenities=amenities.PILETA;
		}else if(n==2){
			return amenities=amenities.SUM;
		}else if(n==3) {
			return amenities=amenities.LAUDRY_ROOM;
		}else if(n==4) {
			return amenities=amenities.ACCESO_GYM;
		}else if(n==5) {
			return amenities=amenities.BALCON;
		}
		return null;
	}
	public static List<Amenities> listaAmenities(String[] aminitieslist){
		List<Amenities> listaAmenities = new ArrayList<>();
		Amenities amenities;
		for (String item : aminitieslist) {
			amenities = asignarAmenities(Integer.parseInt(item));
			listaAmenities.add(amenities);
		}

		return listaAmenities;
	}
}
