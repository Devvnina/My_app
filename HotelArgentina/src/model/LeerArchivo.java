package model;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class LeerArchivo {

	private String comment;
	private List<String> columns;
	private List<String> outputColumns;
	private List<String> lineasErroneas;
	private String filterValue;
	private String filterColumn = null;
	private String separator = ";";
	public  static  List<String> listaHabit = new ArrayList<>();
	public  static  List<String> listaReser = new ArrayList<>();

//	public LeerArchivo(String comment, List<String> columns, String filterValue, String filterColumn,
//			List<String> outputColumns, String separator) {
//		this.comment = comment;
//		this.columns = columns;
//		this.filterValue = filterValue;
//		this.filterColumn = filterColumn;
//		this.outputColumns = outputColumns;
//		this.separator = separator;
//		this.lineasErroneas = new ArrayList<>();
//		if (!this.columns.contains(this.filterColumn)) {
//			throw new IllegalStateException("El filtro elegido no esta dentro de la lista de columnas");
//		}
//	}

	public void leerReservas(String _path) {

		File archivo = null;
		FileReader fr = null;
		BufferedReader br = null;
		List<String> unalista= new ArrayList<>();
		try {
			// Apertura del fichero y creacion de BufferedReader para poder
			// hacer una lectura comoda (disponer del metodo readLine()).
			archivo = new File(_path);//"./resources/reserva.csv");
			fr = new FileReader(archivo);
			br = new BufferedReader(fr);

			// Lectura del fichero
			String linea;
			Reserva reserva = new Reserva();
			while ((linea = br.readLine()) != null) {
			//	List<String> listaReservas = new ArrayList<>();

				listaReserva(linea);//listaReserva(linea);

			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// En el finally cerramos el fichero, para asegurarnos
			// que se cierra tanto si todo va bien como si salta
			// una excepcion.
			try {
				if (null != fr) {
					fr.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
	}
	
	public List<Reserva> listaReserva(String linea) {

		List<Reserva> reservas = new ArrayList<>();
		String[] parts = linea.split(";");
		String[] aminitieslist = parts[5].split(",");
		reservas.add(new Reserva(Integer.parseInt(parts[0]), parts[1], Integer.parseInt(parts[2]), parts[3], parts[4],
				Integer.parseInt(aminitieslist[0]), Double.parseDouble(parts[6])));

		for (int i = 0; i < reservas.size(); i++) {

			System.out.println(reservas.get(i));

		}
		listaReser.add(parts[2]);
		return reservas;

	}
	
	public void leerHabitaciones(String _path) {

		File archivo = null;
		FileReader fr = null;
		BufferedReader br = null;

		try {
			// Apertura del fichero y creacion de BufferedReader para poder
			// hacer una lectura comoda (disponer del metodo readLine()).
			archivo = new File(_path);//"./resources/habitacion.csv");
			fr = new FileReader(archivo);
			br = new BufferedReader(fr);

			// Lectura del fichero
			String linea;
			Habitacion habitacion = new Habitacion();
			int i=0;
			while ((linea = br.readLine()) != null) {
				List<String> listaHabitaciones = new ArrayList<>();
				if(i>0) {
				listaHabitaciones(linea);
				}
				i++;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// En el finally cerramos el fichero, para asegurarnos
			// que se cierra tanto si todo va bien como si salta
			// una excepcion.
			try {
				if (null != fr) {
					fr.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
	}
	
	
	public List<Habitacion> listaHabitaciones(String linea) {

		List<Habitacion> habitaciones = new ArrayList<>();
		String[] parts = linea.split(";");
		String[] aminitieslist = parts[4].split(",");
		habitaciones.add(new Habitacion(Integer.parseInt(parts[0]),Integer.parseInt(parts[1]), Integer.parseInt(parts[2]), Integer.parseInt(parts[3]),
				aminitieslist, Boolean.parseBoolean(parts[5]),Double.parseDouble(parts[6])));

		for (int i = 0; i < habitaciones.size(); i++) {

			System.out.println(habitaciones.get(i));

		}

		listaHabit.add(parts[3]);
		return habitaciones;
		
	}
/*	public void devolverArchivo (String _pathEntrada, String _pathSalida) {
		Path path = Paths.get(_pathEntrada);//"./midata.csv");
		try (BufferedReader bufferedReader = Files.newBufferedReader(path)){
			ParserCsv parser = new ParserCsv("#",
					Arrays.asList(new String[]{"Habitacion", "Disponibilidad"}),
					"Habitacion", "Disponibilidad",
					Arrays.asList(new String[]{"nombre",  "profesion"}), ",");
			parser.parse(bufferedReader, Paths.get(_pathSalida));//"salida_midata.csv"));
		}catch (Exception e){
			System.out.println("Ocurrio un error");
		}

	}*/
}