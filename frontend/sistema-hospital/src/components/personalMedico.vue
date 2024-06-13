<template>
  <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
    <h2 id="accordion-color-heading-1">
      <button type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
        <span>Registra Personal Médico</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      </button>
    </h2>
    
    <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px] bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-center mb-1 text-[#07074D]">HOSPITAL PRIVILAGE CARE</h2>
          <p class="text-sm text-center mb-8 text-[#6B7280]">REGISTRO DE PERSONAL MÉDICO</p>
          <form>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="persona-id" class="mb-3 block text-base font-medium text-[#07074D]">Persona ID</label>
                  <input type="text" name="persona-id" id="persona-id" placeholder="Persona ID" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="nombre" class="mb-3 block text-base font-medium text-[#07074D]">Nombre</label>
                  <input type="text" name="nombre" id="nombre" placeholder="Nombre" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="primer-apellido" class="mb-3 block text-base font-medium text-[#07074D]">Primer Apellido</label>
                  <input type="text" name="primer-apellido" id="primer-apellido" placeholder="Primer Apellido" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="segundo-apellido" class="mb-3 block text-base font-medium text-[#07074D]">Segundo Apellido</label>
                  <input type="text" name="segundo-apellido" id="segundo-apellido" placeholder="Segundo Apellido" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="curp" class="mb-3 block text-base font-medium text-[#07074D]">CURP</label>
                  <input type="text" name="curp" id="curp" placeholder="CURP" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="departamento-id" class="mb-3 block text-base font-medium text-[#07074D]">Departamento ID</label>
                  <input type="text" name="departamento-id" id="departamento-id" placeholder="Departamento ID" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="especialidad" class="mb-3 block text-base font-medium text-[#07074D]">Especialidad</label>
                  <input type="text" name="especialidad" id="especialidad" placeholder="Especialidad" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="tipo" class="mb-3 block text-base font-medium text-[#07074D]">Tipo</label>
                  <input type="text" name="tipo" id="tipo" placeholder="Tipo" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="cedula-profesional" class="mb-3 block text-base font-medium text-[#07074D]">Cédula Profesional</label>
                  <input type="text" name="cedula-profesional" id="cedula-profesional" placeholder="Cédula Profesional" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="estatus" class="mb-3 block text-base font-medium text-[#07074D]">Estatus</label>
                  <input type="text" name="estatus" id="estatus" placeholder="Estatus" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="fecha-contratacion" class="mb-3 block text-base font-medium text-[#07074D]">Fecha de Contratación</label>
                  <input type="date" name="fecha-contratacion" id="fecha-contratacion" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label for="fecha-terminacion-contrato" class="mb-3 block text-base font-medium text-[#07074D]">Fecha de Terminación de Contrato</label>
                  <input type="date" name="fecha-terminacion-contrato" id="fecha-terminacion-contrato" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
            </div>
            <div>
              <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <h2 id="accordion-color-heading-2">
      <button type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
        <span>Registros Agregados</span>
        <svg data-accordion-icon class="w-3 h-3 rotate-0 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      </button>
    </h2>

    <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
      <div class="overflow-x-auto p-12">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">Persona ID</th>
              <th scope="col" class="px-6 py-3">Nombre</th>
              <th scope="col" class="px-6 py-3">Especialidad</th>
              <th scope="col" class="px-6 py-3">Estatus</th>
              <th scope="col" class="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4">12345</td>
              <td class="px-6 py-4">Juan Pérez</td>
              <td class="px-6 py-4">Cardiología</td>
              <td class="px-6 py-4">Activo</td>
              <td class="px-6 py-4">
                <button class="text-blue-600 dark:text-blue-500 hover:underline">Editar</button> |
                <button class="text-red-600 dark:text-red-500 hover:underline">Eliminar</button>
              </td>
            </tr>
            <!-- More rows as needed -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalMedico',
  data() {
    return {
      registros: []
    };
  },
  methods: {
    registrarPersonal() {
      // Método para registrar personal médico
    },
    editarRegistro(id) {
      // Método para editar un registro
    },
    eliminarRegistro(id) {
      // Método para eliminar un registro
    }
  }
}
</script>

<style scoped>
.formulario-registro {
  max-width: 550px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.formulario-registro h2 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.formulario-registro p {
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
  color: #6B7280;
}

.formulario-registro label {
  font-size: 16px;
  font-weight: medium;
  margin-bottom: 5px;
  color: #07074D;
}

.formulario-registro input {
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  color: #6B7280;
  margin-bottom: 20px;
}

.formulario-registro button {
  background-color: #6A64F1;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.formulario-registro button:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.tabla-registros {
  width: 100%;
  overflow-x: auto;
}

.tabla-registros table {
  width: 100%;
  border-collapse: collapse;
}

.tabla-registros th, .tabla-registros td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.tabla-registros th {
  background-color: #f0f0f0;
  color: #07074D;
}

.tabla-registros tr:hover {
  background-color: #f9f9f9;
}

.tabla-registros button {
  color: #1d4ed8;
  cursor: pointer;
  text-decoration: underline;
}

.tabla-registros button:hover {
  color: #2563eb;
}
</style>
