package com.plan.modelo;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.*;
import com.plan.modelo.Semestral;
import com.plan.modelo.Area;
import com.plan.modelo.Materia;

@PersistenceCapable
@javax.persistence.Entity
public class Programa {
	
	DatastoreService pg = DatastoreServiceFactory.getDatastoreService();
	
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private String carrera;
	@Persistent
	private long registro;
	@Persistent
	private String nombre;
	@Persistent
	private long numSem;
	@Persistent
	private long numArea;
	@Persistent
	private String grupo;
	@Persistent
	
	Area areos;
	Semestral semes;
	Materia matters;
	
	public Programa(String carrera,long registro,long numSem,long numArea,String grupo){
		
		this.setCarrera(carrera);
		this.setRegistro(registro);
		this.setNombre(carrera);
		this.setnumSem(numSem);
		this.setnumArea(numArea);
		this.setGrupo(carrera);
		
		semes = new Semestral(numSem);
		areos = new Area(numArea);
		
		
		Entity programa = new Entity("Programa",carrera);
		programa.setProperty("Areas", registro);
		programa.setProperty("Registro", registro);
		programa.setProperty("Semestres", numSem);
		programa.setProperty("Nombre", carrera);
		programa.setProperty("Grupo", carrera);
		Key promKey = KeyFactory.createKey("promKey", programa.getKey().toString());
		pg.put(programa);
		
	}
	
	public void setCarrera(String name){
		this.carrera = name;
	}
	public String getCarrera(){
		return carrera;
	}
	public void setRegistro(long reg){
		this.registro = reg;
	}
	public long getRegistro(){
		return registro;
	}
	public void setNombre(String name){
		this.nombre = name;
	}
	public String getNombre(){
		return nombre;
	}
	public void setnumSem(long number){
		this.numSem = number;
	}
	public long getnumSem(){
		return numSem;
	}
	public void setnumArea(long number){
		this.numArea = number;
	}
	public long getnumArea(){
		return numArea;
	}
	public void setGrupo(String name){
		this.grupo = name;
	}
	public String getGrupo(){
		return grupo;
	}

}
