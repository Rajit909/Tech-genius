<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'address',
        'city',
        'state',
        'zip_code',
        'country',
        'date_of_birth',
        'gender'
    ];

    protected $casts = [
        'date_of_birth' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime'  
    ];

    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function getAgeAttribute(): ?int
    {
        if (!$this->date_of_birth) {
            return null;
        }

        return now()->diffInYears($this->date_of_birth);
    }

    public function scopeAdults($query)
    {
        return $query->where('date_of_birth', '<=', now()->subYears(18));
    }

    public function scopeMinors($query)
    {
        return $query->where('date_of_birth', '>', now()->subYears(18));
    }

    public function scopeFromCountry($query, string $country)
    {
        return $query->where('country', $country);
    }

    public function scopeRecent($query, int $days = 30)
    {
        return $query->where('created_at', '>=', now()->subDays($days));
    }


    public function scopeSearch($query, string $term)
    {
        $term = "%$term%";
        return $query->where(function ($q) use ($term) {
            $q->where('first_name', 'like', $term)
              ->orWhere('last_name', 'like', $term)
              ->orWhere('email', 'like', $term)
              ->orWhere('phone', 'like', $term);
        });
    }

    public function scopeOrdered($query, string $column = 'last_name', string $direction = 'asc')
    {
        return $query->orderBy($column, $direction);
    }

    public function scopeActive($query)
    {
        return $query->whereNull('deleted_at');
    }

    public function scopeInactive($query)
    {
        return $query->whereNotNull('deleted_at');
    }

    public function softDelete()
    {
        $this->deleted_at = now();
        $this->save();
    }

    public function restore()
    {
        $this->deleted_at = null;
        $this->save();
    }
}
