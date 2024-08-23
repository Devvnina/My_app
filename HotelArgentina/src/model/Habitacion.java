package model;


import java.util.Arrays;
import java.util.List;
public class Habitacion {

	private int idHabitacion; 
	private int numero;
	private TipoHabitacion tamanio; //Enum TipoHbaitacion 
	private int cantidadHuespedes; 
	private String amenities; //Enum Amenities
	private boolean disponibilidad;
	private double precio; 
	
	public Habitacion() {
		
	}
	
	public Habitacion(int idHabitacion, int numero, int tamanio, int cantidadHuespedes, String [] amenities,
			boolean disponibilidad, double precio) {
		super();
		this.idHabitacion = idHabitacion;
		this.numero = numero;
		this.tamanio = Common.asignarTipo(cantidadHuespedes);
		this.cantidadHuespedes = cantidadHuespedes;
		this.amenities = listaAmenities(amenities);
		this.disponibilidad = disponibilidad;
		this.precio = precio;
	}
	//Setters y Getters 
	public int getIdHabitacion() {
		return idHabitacion;
	}
	public void setIdHabitacion(int idHabitacion) {
		this.idHabitacion = idHabitacion;
	}
	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public TipoHabitacion getTamanio() {
		return tamanio;
	}
	public void setTamanio(TipoHabitacion tamanio) {
		this.tamanio = tamanio;
	}
	public int getCantidadHuespedes() {
		return cantidadHuespedes;
	}
	public void setCantidadHuespedes(int cantidadHuespedes) {
		this.cantidadHuespedes = cantidadHuespedes;
	}
	public String getAmenities() {
		return amenities;
	}
	public void setAmenities(String amenities) {
		this.amenities = amenities;
	}
	public boolean isDisponibilidad() {
		return disponibilidad;
	}
	public void setDisponibilidad(boolean disponibilidad) {
		this.disponibilidad = disponibilidad;
	}
	
	
	public double getPrecio() {
		return precio;
	}
	public void setPrecio(double precio) {
		this.precio = precio;
	}
	
	public String listaAmenities(String [] amenities) {
		String listaamenities = null;
	
	
		
		for (String i:amenities) {
		listaamenities=Common.asignarAmenities(Integer.parseInt(i))+",";
	
		}
		
		return listaamenities;		
	}
	
	@Override
	public String toString() {
		return "Habitacion [idHabitacion=" + idHabitacion + ", numero=" + numero + ", tamanio=" + tamanio
				+ ", cantidadHuespedes=" + cantidadHuespedes + ", amenities=" + amenities + ", disponibilidad="
				+ disponibilidad + ", precio=" + precio + "]";
	}

	

	
}
