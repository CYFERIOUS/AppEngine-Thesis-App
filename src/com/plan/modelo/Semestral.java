package com.plan.modelo;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

import com.plan.modelo.Materia;

public class Semestral {
	
	DatastoreService Sm = DatastoreServiceFactory.getDatastoreService();
	
	private long numCred;
	private long time;
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
