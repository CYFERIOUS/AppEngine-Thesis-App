package com.plan.modelo;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.google.appengine.api.datastore.*;



@Entity
public class Materia {

	//DatastoreService Mt = DatastoreServiceFactory.getDatastoreService();
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private long semestre;
	private long creditos;
	private long horas;
	private String Nombre;
	private String area;
	private long prerq;
	private String tipos;
	
	public Materia(long id, long semestre, long creditos,long horas,String nomus, String area,long prerq,String tipos){
		
		this.id = id;
		this.semestre = semestre;
		this.creditos = creditos;
		this.horas = horas;
		this.Nombre = nomus;
		this.area = area;
		this.prerq = prerq;
		this.tipos = tipos;
		
		/*this.setId(id);
		this.setSemestre(semestre);
		this.setCreditos(creditos);
		this.setHoras(horas);
		this.setNombre(nomus);
		this.setArea(area);
		this.setPrerq(prerq);
		this.setTipos(tipos);

		Entity signature = new Entity("Materia",id);
		signature.setProperty("Codigo", id);
		signature.setProperty("Semestre", semestre);
		signature.setProperty("Creditos", creditos);
		signature.setProperty("Horas", horas);
		signature.setProperty("Nombre", nomus);
		signature.setProperty("Area", area);
		signature.setProperty("Pre-req", prerq);
		signature.setProperty("Typo", tipos);
		Mt.put(signature);*/
		
		//Key matKey = KeyFactory.createKey("signKey", signature.getKey().toString());
			
	}
	
	public void destroyMateria(Key id){
		//Mt.delete(id);
	}
	
	public String getNombre() {
		return Nombre;
	}


	public void setNombre(String name) {
		this.Nombre = name;
	}

	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public long getSemestre() {
		return semestre;
	}


	public void setSemestre(long semestre) {
		this.semestre = semestre;
	}


	public long getCreditos() {
		return creditos;
	}


	public void setCreditos(long creditos) {
		this.creditos = creditos;
	}


	public long getHoras() {
		return horas;
	}


	public void setHoras(long horas) {
		this.horas = horas;
	}



	public String getArea() {
		return area;
	}



	public void setArea(String area) {
		this.area = area;
	}



	public long getPrerq() {
		return prerq;
	}



	public void setPrerq(long prerq) {
		this.prerq = prerq;
	}



	public String getTipos() {
		return tipos;
	}



	public void setTipos(String tipos) {
		this.tipos = tipos;
	}
	
}
