package com.plan.modelo;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

import com.plan.modelo.Semestral;
import com.plan.modelo.Area;

public class Programa {
	
	DatastoreService pg = DatastoreServiceFactory.getDatastoreService();
	
	public long Idcod;
	public long registro;
	public long numSem;
	public String carrera;
	
	Area areos;
	Semestral semes;
	
	public Programa(long Idcod,long registro,long numSem,String carrera){
		
		this.Idcod = Idcod;
		this.registro = registro;
		this.numSem = numSem;
		this.carrera = carrera;
		
		semes = new Semestral(numSem);
		areos = new Area();
		
		Entity programa = new Entity("Programa",Idcod);
		programa.setProperty("registro", registro);
		programa.setProperty("Semestres", numSem);
		programa.setProperty("Nombre", carrera);
		pg.put(programa);
		
	}

}
