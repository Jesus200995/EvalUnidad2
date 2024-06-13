<template>
    <div class="flex items-center justify-center p-12">
      <!-- Author: FormBold Team -->
      <div class="mx-auto w-full max-w-[550px] bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-center mb-1 text-[#07074D]">HOSPITAL PRIVILAGE CARE</h2>
        <p class="text-sm text-center mb-8 text-[#6B7280]">PERSONAS</p>
        <form>
          <div class="-mx-3 flex flex-wrap">
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
                <label for="genero" class="mb-3 block text-base font-medium text-[#07074D]">Género</label>
                <select name="genero" id="genero" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                  <option value="">Seleccione</option>
                  <option value="femenino">Femenino</option>
                  <option value="masculino">Masculino</option>
                  <option value="prefiero-no-decirlo">Prefiero no decirlo</option>
                </select>
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label for="sangre" class="mb-3 block text-base font-medium text-[#07074D]">Tipo de Sangre</label>
                <select name="sangre" id="sangre" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                  <option value="">Seleccione</option>
                  <option value="o+">O+</option>
                  <option value="o-">O-</option>
                  <option value="a+">A+</option>
                  <option value="a-">A-</option>
                </select>
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label for="fecha-nacimiento" class="mb-3 block text-base font-medium text-[#07074D]">Fecha de Nacimiento</label>
                <input type="date" name="fecha-nacimiento" id="fecha-nacimiento" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label for="telefono" class="mb-3 block text-base font-medium text-[#07074D]">Teléfono</label>
                <input type="text" name="telefono" id="telefono" placeholder="Teléfono" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <label for="correo" class="mb-3 block text-base font-medium text-[#07074D]">Correo Electrónico</label>
                <input type="email" name="correo" id="correo" placeholder="Correo Electrónico" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            </div>
          </div>
          <div>
            <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Enviar
            </button>
          </div>
          <div class="mt-4 text-center">
            <p class="text-[#6B7280]">¿Ya tienes cuenta? <a href="http://localhost:5173" class="text-[#6A64F1] underline">Inicia sesión aquí</a></p>
          </div>
        </form>
      </div>
    </div>
  </template>