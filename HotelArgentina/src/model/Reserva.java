package model;

import java.text.ParseException;


import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

public class Reserva {
	private int idReserva;
	private String origen; 
	private int cantidadHuespedes; 
	private String fechaEntrada; 
	private String fechaSalida; 
	private int estadia;
	private Amenities amenities; 
	private double pagoAbonado;
	
	public Reserva (String reserva) {
		
	} 
	
	public Reserva() {
		// TODO Auto-generated constructor stub
	}
	
	public Reserva(int id, String origen, int cantidadHuespedes, String checkIn, String checkOut, int amenities, double pagoAbonado) {
		this.idReserva= id; 
		this.origen= origen; 
		this.cantidadHuespedes=cantidadHuespedes; 
		this.fechaEntrada = checkIn; 
		this.fechaSalida = checkOut;
		this.amenities= Common.asignarAmenities(amenities);
	    this.pagoAbonado= pagoAbonado;
	    this.estadia= calculoEstadia(checkIn, checkOut);
		
	}

	public int getIdReserva() {
		return idReserva;
	}
	public void setIdReserva(int idReserva) {
		this.idReserva = idReserva;
	}
	public String getOrigen() {
		return origen;
	}
	public void setOrigen(String origen) {
		this.origen = origen;
	}
	public int getCantidadHuespedes() {
		return cantidadHuespedes;
	}
	public void setCantidadHuespedes(int cantidadHuespedes) {
		this.cantidadHuespedes = cantidadHuespedes;
	}
	public String getFechaEntrada() {
		return fechaEntrada;
	}
	public void setFechaEntrada(String fechaEntrada) {
		this.fechaEntrada = fechaEntrada;
	}
	public String getFechaSalida() {
		return fechaSalida;
	}
	public void setFechaSalida(String fechaSalida) {
		this.fechaSalida = fechaSalida;
	}
	public Amenities getAmenities() {
		return amenities;
	}
	public void setAmenities(Amenities amenities) {
		this.amenities = amenities;
	}
	public double getPagoAbonado() {
		return pagoAbonado;
	}
	public void setPagoAbonado(double pagoAbonado) {
		this.pagoAbonado = pagoAbonado;
	}
	public int getEstadia() {
		return estadia;
	}
	public void setEstadia(int estadia) {
		this.estadia = estadia;
	} 
	
		
	
	
	public int calculoEstadia(String fechaEntrada , String fechaSalida) {
			SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
	        long diff=0;
			try {
				diff = formato.parse(fechaSalida).getTime() - formato.parse(fechaEntrada).getTime();
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				//Ejemplo
				//Generar Archivo de errores por error en la fecha en el cálculo de la estadía
				//se recomienda subir la excepción para capturar las excepciones
				//
				e.printStackTrace();
			}
	        TimeUnit time = TimeUnit.DAYS; 
	        long diffrence = time.convert(diff, TimeUnit.MILLISECONDS);
		
		return (int) diffrence;
		
	}
	
	public double calculoPaquete(long dias, double pago, int cantidadPersonas ) {
		double descuento; 
		double valorTotal;
		Common precio = new Common();
		//los porcentajes de los descuentos de los paquetes deberían ser parámetros constantes 
		
		if(dias>precio.estadiaCorta&&dias<precio.estadiaLarga) {
			descuento = pago*precio.paqueteBroce; 
			valorTotal= pago-descuento;
		} else if(dias>=precio.estadiaLarga){
			descuento =pago*precio.paqueteGold; 
			valorTotal = pago - descuento - (cantidadPersonas*precio.ticket)*precio.descuentoTicket;
			
		}else {
			valorTotal=pago;
		}
				
		return valorTotal;
		
	}
	


	@Override
	public String toString() {
		return "Reserva [idReserva=" + idReserva + ", origen=" + origen + ", cantidadHuespedes=" + cantidadHuespedes
				+ ", fechaEntrada=" + fechaEntrada + ", fechaSalida=" + fechaSalida + ", estadia=" + estadia
				+ ", amenities=" + amenities + ", pagoAbonado=" + pagoAbonado + "]";
	}


	
	
	
}
