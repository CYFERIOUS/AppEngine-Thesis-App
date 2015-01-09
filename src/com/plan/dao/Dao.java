package com.plan.dao;
import javax.persistence.EntityManager;

import com.plan.modelo.Materia;

public enum Dao {
	
	INSTANCE;
	
	  public void addMateria(long id, long semestre, long creditos,long horas,String nomus, String area,long prerq,String tipos) {
		  EntityManager em = EMFService.get().createEntityManager();
		  
		    try {
		    	Materia matter = em.find(Materia.class, id);
		    	matter.setId(id);
		    	matter.setSemestre(semestre);
		    	matter.setCreditos(creditos);
		    	matter.setHoras(horas);
		    	matter.setNombre(nomus);
		    	matter.setArea(area);
		    	matter.setPrerq(prerq);
		    	matter.setTipos(tipos);
		    	em.persist(matter);
		    } finally {
		      em.close();
		    }

		  }
	  
	  public void updateMateria(long id, long semestre, long creditos,long horas,String nomus, String area,long prerq,String tipos) {
		  EntityManager em = EMFService.get().createEntityManager();
		    try {
		    	Materia matter = em.find(Materia.class, id);
				matter.setId(id);
				matter.setSemestre(semestre);
				matter.setCreditos(creditos);
				matter.setHoras(horas);
				matter.setNombre(nomus);
				matter.setArea(area);
				matter.setPrerq(prerq);
				matter.setTipos(tipos);
				em.persist(matter);
		    } finally {
		      em.close();
		    }

		  }
	  
	  public void deleteMateria(String codux) {
		  EntityManager em = EMFService.get().createEntityManager();
		    try {
		    Materia matter = em.find(Materia.class, codux);
		     em.remove(matter);
		    } finally {
		      em.close();
		    }

		  }

}
