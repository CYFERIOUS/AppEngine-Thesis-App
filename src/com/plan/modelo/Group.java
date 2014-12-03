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
	
public Group(int op, int semos, long reg){
	
	switch(op){
	case 1:
		Programa current1= new Programa(0, reg, semos, "Multimedia");
		Key MultiKey = new KeyFactory.Builder("Multimedia","Programa").addChild("Multimedia", "materias").getKey();
	break;
	
	case 2:
		Programa current2 = new Programa(0, reg,  semos,"Industrial");
		Key InduKey = new KeyFactory.Builder("Industrial","Programa").addChild("Industrial", "materias").getKey();
	break;
	case 3:
		Programa current3 = new Programa(0, reg,  semos, "Civil");
		Key CivilKey = new KeyFactory.Builder("Civil","Programa").addChild("Civil", "materias").getKey();
	break;
	case 4:
		Programa current4 = new Programa(0, reg,  semos, "Mecatronica");
		Key mecaKey = new KeyFactory.Builder("Mecatronica","Programa").addChild("Mecatronica", "materias").getKey();
	break;
	}
	
	/*Entity Grup1 = new Entity("Grup1",Multimedia.getKey());
	Grup1.setProperty("registro", registro);
	Grup1.setProperty("Semestres", numSem);
	Grup1.setProperty("Nombre", carrera);
	gr.put(Grup1);*/
	
}

}
