package com.plan.modelo;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.plan.modelo.Semestral;
import com.plan.modelo.Area;


@PersistenceCapable
@javax.persistence.Entity
public class Programa {
	
	DatastoreService pg = DatastoreServiceFactory.getDatastoreService();
	
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	public long Idcod;
	@Persistent
	public long registro;
	@Persistent
	public long numSem;
	@Persistent
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
