package com.plan.modelo;
import java.util.Arrays;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.*;
import com.plan.modelo.Programa;
import com.plan.modelo.Area;
import com.plan.modelo.Semestral;
import com.plan.modelo.Materia;
@SuppressWarnings("unused")

public class Group {
	
	DatastoreService gr = DatastoreServiceFactory.getDatastoreService();
	public int op;
	public int semos;
	public long reg;
	public long keyEst;
	
public Group(){
	
	
	/*Entity Grup1 = new Entity("Grup1",Multimedia.getKey());
	Grup1.setProperty("registro", registro);
	Grup1.setProperty("Semestres", numSem);
	Grup1.setProperty("Nombre", carrera);
	gr.put(Grup1);*/
	
}

}
