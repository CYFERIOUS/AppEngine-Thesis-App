package com.plan.modelo;

import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.*;
import com.plan.modelo.Materia;


@PersistenceCapable
@javax.persistence.Entity
public class Semestral {
	
	DatastoreService Sm = DatastoreServiceFactory.getDatastoreService();
	
	@Persistent
	private long numCred;
	@Persistent
	private long time;
	@Persistent
	public long numSem;
	Materia sum;

	
public Semestral( long numSem){
	
		this.numSem = numSem;
	
		this.numCred = this.getNumCred();
		this.time = this.getTime();
		for(int i=1;i<=numSem;i++){
		Entity semester = new Entity("Semestre",i);
		semester.setProperty("Creditos", numCred);
		semester.setProperty("No.Horas", time);
		Sm.put(semester);
		Key semKey = KeyFactory.createKey("semKey", semester.getKey().toString());
		}
		
}


public long getNumCred() {
	return numCred;
}


public void setNumCred(long numCred) {
	this.numCred = numCred;
}


public long getTime() {
	return time;
}


public void setTime(long time) {
	this.time = time;
}

}
