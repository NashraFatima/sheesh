"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdminSelect } from "@/components/admin/ui/AdminSelect";
import { ImageUploadField } from "@/components/admin/ui/ImageUploadField";
import { eventStatusOptions } from "@/lib/admin/form-options";
import type { AdminEvent } from "@/lib/admin/types";

interface EventFormProps {
  event?: AdminEvent | null;
  onCancel: () => void;
  onSave?: () => void;
}

export function EventForm({ event, onCancel, onSave }: EventFormProps) {
  const [status, setStatus] = useState<string>(event?.status ?? "Draft");

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        onSave?.();
      }}
    >
      <ImageUploadField
        label="Event Banner"
        hint="Cinematic event imagery · 21:9 recommended"
        initialPreview={event?.image ?? null}
        aspect="wide"
      />

      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="event-title">Title</Label>
        <Input
          id="event-title"
          defaultValue={event?.title}
          placeholder="Event title"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="event-date">Date</Label>
          <Input
            id="event-date"
            type="date"
            defaultValue={event?.date}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-time">Time</Label>
          <Input
            id="event-time"
            defaultValue={event?.time}
            placeholder="8:00 PM"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="event-location">Location</Label>
        <Input
          id="event-location"
          defaultValue={event?.location}
          placeholder="Sheesh Main Lounge"
          required
        />
      </div>

      <AdminSelect
        label="Status"
        value={status}
        onChange={setStatus}
        options={eventStatusOptions}
        placeholder="Select status"
      />

      <div className="flex flex-wrap gap-3 border-t border-white/[0.06] pt-4">
        <button
          type="submit"
          className="rounded-full bg-[#d4af37] px-6 py-2.5 text-sm font-medium text-[#050505]"
        >
          Save Event (UI only)
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full border border-white/15 px-6 py-2.5 text-sm text-white/60"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
