import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const phoneBookApi = createApi({
  reducerPath: 'phoneBookApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://618ed24b50e24d0017ce147f.mockapi.io/' }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Contacts' as const, id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContacts: builder.mutation({
      query: body => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Contacts', id: 'LIST'}]
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{type: 'Contacts', id: 'LIST'}]
    })
  }),
})

export const {useGetContactsQuery, useAddContactsMutation, useDeleteContactsMutation} = phoneBookApi