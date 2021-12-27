function ProjectBuilder(
    slug,
    region,
    nombre,
    institucion,
    codigo_institucion,
    coordinador,
    descripcion,
    video,
    images
) {
    this.slug = slug;
    this.region = region;
    this.nombre = nombre;
    this.institucion = institucion;
    this.codigo_institucion = codigo_institucion;
    this.coordinador = coordinador;
    this.descripcion = descripcion;
    this.video = video;
    this.images = images;
}

export default ProjectBuilder