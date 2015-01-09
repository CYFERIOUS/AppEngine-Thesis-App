package com.plan.modelo;


import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import com.google.appengine.api.datastore.*;

@PersistenceCapable
@javax.persistence.Entity

public class Area {
	
	DatastoreService ar = DatastoreServiceFactory.getDatastoreService();
	
	@Persistent
	public String[] nomar ;
	
	public Area(){
			
	nomar = new String[7];
	
	nomar [0] = null;
	nomar [1] = "Ciencias Basicas";
	nomar [2] = "Ciencias de la Ingenieria";
	nomar [3] = "Ingenieria Aplicada";
	nomar [4] = "Economico Administrativa";
	nomar [5] = "Socio Humanistica";
	nomar [6] = "Complementaria";
	
		for(int i=1;i<=nomar.length-1;i++){
		Entity areal = new Entity("Areas",i);
		areal.setProperty("NombreArea", nomar[i]);
		ar.put(areal);
		Key arKey = KeyFactory.createKey("areaKey", areal.getKey().toString());
		}	
		
		
	}
}
