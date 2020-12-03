using Entity;
using System;
namespace Proyecto.Models
{
    public class VinculacionInputModel
    {
        public string CodigoRestaurante { get; set; }
        public string NombreRestaurante { get; set; }
        public string CodigoPersona { get; set; }
        public string NombrePersona { get; set; }
        
    }

    public class VinculacionViewModel : VinculacionInputModel
    {
        public VinculacionViewModel()
        {

        }
        public VinculacionViewModel(Vinculacion vinculacion)
        {   
            Codigo = vinculacion.Codigo;
            CodigoRestaurante = vinculacion.CodigoRestaurante;
            NombreRestaurante = vinculacion.NombreRestaurante;
            CodigoPersona = vinculacion.CodigoPersona;
            NombrePersona = vinculacion.NombrePersona;
        }
        public string Codigo {get;set;}
    }
}