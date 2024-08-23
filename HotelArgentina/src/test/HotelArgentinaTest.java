package test;

import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

import model.Reserva;

public class HotelArgentinaTest {
	private Reserva reserva;

	@Before
	public void setUp() {
		reserva = new Reserva();

	}

	/**
	 * Este escenario representa el cálculo de paquete bronce envío como parámetros
	 * días, pago y cantidad de personas
	 */
	@Test
	public void calcularPaqueteBronce() throws Exception {

		double resultado = reserva.calculoPaquete(6, 100, 4);

		System.out.print(resultado);
		assertEquals(85.0, resultado, 0.0);

	}

	/**
	 * Este escenario representa el cálculo de paquete oro hasta 10 días envío como
	 * parámetros días, pago y cantidad de personas
	 */
	@Test
	public void calcularPaqueteOro() throws Exception {

		double resultado = reserva.calculoPaquete(10, 10000, 4);
		assertEquals(8220.0, resultado, 0.0);

	}

	/**
	 * Este escenario representa el cálculo de paquete oro superior 10 días envío
	 * como parámetros días, pago y cantidad de personas
	 */
	@Test
	public void calcularPaqueteOroSuperior() throws Exception {

		double resultado = reserva.calculoPaquete(12, 7500, 4);
		assertEquals(6095.0, resultado, 0.0);

	}
	/**Escenario que calcula la estadía del huesped
	 * teniendo como parámetro 2 fechas 
	 */
	
	@Test 
	public void calcularEstadia() {
	int resultado= reserva.calculoEstadia("18/12/2021", "25/12/2021");
	assertEquals(7, resultado);
	}

}
